const colors = [
  { hex: "#f44336", rgb: "244,67,54" },
  { hex: "#e91e63", rgb: "233,30,99" },
  { hex: "#9c27b0", rgb: "156,39,176" },
  { hex: "#673ab7", rgb: "103,58,183" },
];

function createColorCardsMarkup(color) {
  `
  <div class="palette js-palette">
  <div class="color-card">
    <div
      class="color-swatch"
      data-hex="#955014"
      data-rgb="149,80,20"
      style="background-color: #955014"
    ></div>
    <div class="color-meta">
      <p>HEX: #955014</p>
      <p>RGB: 149,80,20</p>
    </div>
  </div>
</div> 
    
    `;
}
