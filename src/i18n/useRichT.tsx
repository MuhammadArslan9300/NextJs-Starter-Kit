import {ReactNode, useMemo} from "react";
import {useTranslations} from "next-intl";

/**
 * Function type for rich tags (<brand>...</brand>)
 */
export type RichTag = (chunks: ReactNode) => ReactNode;

/**
 * Values allowed by next-intl t.rich()
 */
export type RichValue =
  | string
  | number
  | Date
  | RichTag;

/**
 * Params passed to t.rich()
 */
export type RichParams = Partial<Record<string, RichValue>>;

/**
 * 🔥 Default design-system rich styles
 */
const defaultRichMap: Record<string, RichValue> = {
  brand: (c) => <span className="text-brand">{c}</span>,
  bold: (c) => <strong>{c}</strong>,
  muted: (c) => (
    <span className="text-muted-foreground">{c}</span>
  ),
};

/**
 * 🏆 Reusable rich translation hook
 */
export function useRichT(namespace: string) {
  const t = useTranslations(namespace);

  return useMemo(
    () =>
      (key: string, params?: RichParams) => {
        // Build a clean object WITHOUT undefined values
        const merged: Record<string, RichValue> = {
          ...defaultRichMap,
        };

        if (params) {
          for (const k in params) {
            const v = params[k];
            if (v !== undefined) {
              merged[k] = v;
            }
          }
        }

        return t.rich(key, merged);
      },
    [t]
  );
}