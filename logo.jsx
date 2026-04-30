// Logo as raster image — exactly the brand asset provided
const NLLogo = ({ light = false, compact = false, size = 44 }) => {
  // Original asset: 705 × 163 → aspect ratio ≈ 4.33
  const src = light ? "logo-light.png?v=2" : "logo-dark.png?v=2";
  const height = compact ? Math.round(size * 0.7) : size;
  return (
    <img
      src={src}
      alt="NEO Living Developments"
      style={{
        height,
        width: "auto",
        display: "block",
        userSelect: "none",
      }}
      draggable={false}
    />
  );
};

// Keep NLMark export for any place that imports just the mark — render same image cropped/sized small
const NLMark = ({ size = 32, color }) => (
  <img
    src={(color === "#ffffff" || color === "white") ? "logo-light.png" : "logo-dark.png"}
    alt=""
    aria-hidden="true"
    style={{
      height: size,
      width: "auto",
      display: "block",
      // crop to the NL portion only by clipping with object-fit + object-position
      objectFit: "cover",
      objectPosition: "left center",
      maxWidth: size * 1.1,
    }}
    draggable={false}
  />
);

window.NLMark = NLMark;
window.NLLogo = NLLogo;
