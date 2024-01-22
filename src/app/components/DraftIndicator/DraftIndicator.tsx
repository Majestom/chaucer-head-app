import * as classes from "./DraftIndicator.css";

export function DraftIndicator({
  draft,
}: {
  draft?: boolean;
}) {
  return (
    <div
      className={
        draft ? classes.nonDraftMarker : classes.draftMarker
      }
    >
      {draft ? "Draft" : "Non-Draft"}
    </div>
  );
}
