---
name: pretext
description: >
  Use this skill when building interactive text demos, kinetic typography, or
  any canvas-based layout where text must flow around moving objects, obstacles,
  or cursors. Triggers on: "text that avoids the cursor", "text parting around
  an object", "kinetic typography on canvas", "dynamic text layout", "text
  wrapping around a moving element", "dragon parts text", "illustrated
  manuscript effect", "per-glyph animation", "text displacement". Use even
  when the user just says "make the text react to the mouse" or "text that
  moves" in a canvas context.
---

# Pretext — Skill Reference

Pretext is a TypeScript library by @chenglou for **pixel-accurate text
measurement and layout via the browser's font engine (Canvas API)**, without
touching the DOM or CSS. The core insight: it uses `CanvasRenderingContext2D`
as a ground-truth font measurer, then gives you raw line/glyph data to render
however you want.

**Repo**: https://github.com/chenglou/pretext  
**Live demos**: https://chenglou.me/pretext/  
**Install**: `npm install @chenglou/pretext`

---

## Mental Model

```
prepare(text, font)          ← heavy, once
       ↓
PreparedText (opaque handle)
       ↓
layout(prepared, maxWidth, lineHeight)   ← ultra-fast, every frame
       ↓
{ height, lineCount }        ← use for accordion / virtualization

── or ──

layoutWithLines(...)         ← returns LayoutLine[] for per-glyph control
```

Pretext measures — you render. No built-in drawing. Use Canvas, SVG, or
positioned divs.

---

## Core API

### Use-case 1 — Fast height prediction

```ts
import { prepare, layout } from '@chenglou/pretext';

const font = '16px Inter';
const prepared = prepare(longText, font);   // once, ~tens of ms

// call every frame / resize — sub-millisecond
const { height, lineCount } = layout(prepared, containerWidth, 1.5);
```

**When**: accordions, virtual lists, masonry, any "how tall will this be?"

---

### Use-case 2 — Per-line / per-glyph control

```ts
import { prepareWithSegments, layoutWithLines } from '@chenglou/pretext';

const prepared = prepareWithSegments(text, font);
const { lines, lineHeight, height } = layoutWithLines(
  prepared,
  maxWidth,
  lineHeightMultiplier,  // e.g. 1.75
  fontSize               // px
);

// lines: LayoutLine[]
// each line has .words → each word has .text, .width
```

**When**: text that wraps around obstacles, per-glyph displacement, dragon demo.

---

### Use-case 3 — Streaming / obstacle wrapping

```ts
import { prepareWithSegments, layoutNextLine } from '@chenglou/pretext';

const prepared = prepareWithSegments(text, font);

// Pass different maxWidth per line — wraps around arbitrary shapes
let lineState = null;
while (true) {
  const maxWidthForThisLine = computeWidthAroundObstacle(currentY);
  const result = layoutNextLine(prepared, lineState, maxWidthForThisLine, lineH);
  if (!result) break;
  lineState = result.nextState;
  renderLine(result.line, currentY);
  currentY += lineH;
}
```

**When**: text flows around a dragon's body, a circular image, any irregular
obstacle.

---

## prepare() options

```ts
prepare(text, font, {
  whiteSpace: 'normal' | 'pre-wrap'   // default: 'normal'
})
```

`font` must match exactly what you use in Canvas or CSS:
- `"16px Inter"`
- `"bold 24px 'UnifrakturCook', serif"`
- `"400 18px system-ui"`

---

## Performance notes

| Call | Cost | When to call |
|---|---|---|
| `prepare` | ~10–50ms | Once per text+font combo |
| `layout` | ~0.1ms | Every frame, every resize |
| `layoutWithLines` | ~0.5ms | Every frame |
| `layoutNextLine` | ~0.1ms per line | Every frame |

Always `prepare` outside the animation loop. `layout*` inside.

---

## Shim (no npm)

When building a standalone HTML demo without a bundler, you can implement the
core API directly — this is what the dragon demo does:

```js
const _mc = document.createElement('canvas');
const _cx = _mc.getContext('2d');

function prepare(text, font) {
  _cx.font = font;
  const tokens = text.split(/(\s+)/);
  return {
    font,
    words: tokens.map(t => ({
      text: t,
      width: _cx.measureText(t).width,
      isSpace: /^\s+$/.test(t)
    }))
  };
}

function layoutWithLines(prepared, maxWidth, lineHeightMult, fontSize) {
  _cx.font = prepared.font;
  const lh = fontSize * lineHeightMult;
  const lines = [];
  let line = [], w = 0;
  for (const word of prepared.words) {
    if (word.isSpace) { if (line.length) line.push(word); continue; }
    if (w + word.width > maxWidth && line.length) {
      lines.push({ words: line, width: w });
      line = [word]; w = word.width;
    } else { line.push(word); w += word.width; }
  }
  if (line.length) lines.push({ words: line, width: w });
  return { lines, lineHeight: lh, height: lines.length * lh };
}
```

Accuracy: identical to native for Latin text. For CJK / bidi / hyphenation,
use the real library.

---

## Per-glyph displacement pattern

The classic "text parts like water" effect:

```js
function getDisplacement(glyphX, glyphY, obstacleX, obstacleY, radius) {
  const dx = glyphX - obstacleX;
  const dy = glyphY - obstacleY;
  const dist = Math.sqrt(dx*dx + dy*dy);
  if (dist > radius || dist < 0.1) return { ox: 0, oy: 0, alpha: 1 };
  const force = Math.pow(1 - dist / radius, 2) * radius * 0.6;
  return {
    ox: (dx / dist) * force,
    oy: (dy / dist) * force * 0.4,
    alpha: 0.15 + (dist / radius) * 0.85
  };
}

// Inside render loop, per glyph:
const { ox, oy, alpha } = getDisplacement(gx, gy, dragon.x, dragon.y, 90);
ctx.globalAlpha = alpha;
ctx.fillText(glyph, gx + ox, gy + oy);
```

---

## Full dragon demo

See `pretext-dragon.html` — a working standalone demo with:
- Pretext shim (no npm)
- `layoutWithLines` for per-glyph layout
- Smooth dragon following cursor with inertia
- Per-glyph displacement + alpha fade
- Canvas particle fire from snout
- Gothic fonts (UnifrakturCook + IM Fell English)

---

## Gotchas

- Font must be **loaded** before `prepare()`. Use `document.fonts.ready.then(...)`.
- `prepare` is expensive — **never call inside requestAnimationFrame**.
- The `PreparedText` handle is opaque — don't serialize or mutate it.
- For variable-width obstacles, use `layoutNextLine` not `layoutWithLines`.
- Shim is accurate for Latin; use real library for emoji, RTL, CJK.
