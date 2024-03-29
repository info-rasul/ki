import { useEffect, type RefObject } from "react";
import useCallbackRef, { type CallbackFn } from "./useCallbackRef";

// Events to call addEventListener/removeEventListener for if not specified
const DEFAULT_EVENTS = ["mousedown", "touchstart"];

const useOnClickOutside = (
  ref: RefObject<HTMLElement | null>,
  callback: CallbackFn,
  events: string[] = DEFAULT_EVENTS,
): void => {
  const callbackFn = useCallbackRef(callback);

  useEffect(() => {
    const onClickHandler = (e: Event) => {
      if (!ref.current?.contains(e.target as Node)) {
        callbackFn(e);
      }
    };

    events.forEach((e) => document.addEventListener(e, onClickHandler));

    return () => {
      events.forEach((e) => document.removeEventListener(e, onClickHandler));
    };
  }, [ref, events, callbackFn]);
};

export default useOnClickOutside;
