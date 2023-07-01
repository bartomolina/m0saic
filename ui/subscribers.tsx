import { IStream } from "@superfluid-finance/sdk-core";
import { Subscriber } from "./subscriber";
import { useMemo } from "react";

export function Subscribers({
  subscriptions,
  tba,
}: {
  tba: `0x${string}`;
  subscriptions: IStream[];
}) {
  const filteredSubscriptions = useMemo(() => {
    return subscriptions.filter(
      (subscription) =>
        subscription.currentFlowRate != "0" &&
        subscription.receiver.toLowerCase() === tba.toLowerCase()
    );
  }, [subscriptions]);

  return (
    <div className="space-y-3">
      <div className="text-sm font-medium">Subscribers</div>
      {filteredSubscriptions.length ? (
        filteredSubscriptions.map((subscription) => (
          <Subscriber key={subscription.id} subscription={subscription} />
        ))
      ) : (
        <div className="text-sm font-medium">No subscribers yet 😔</div>
      )}
    </div>
  );
}
