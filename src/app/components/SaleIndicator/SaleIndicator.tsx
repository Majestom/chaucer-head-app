import * as classes from "./SaleIndicator.css";

export function SaleIndicator({
  onSale,
}: {
  onSale: boolean;
}) {
  return (
    <div
      className={
        onSale
          ? classes.onSaleMarker
          : classes.offSaleMarker
      }
    >
      {onSale ? "On Sale" : "Off Sale"}
    </div>
  );
}
