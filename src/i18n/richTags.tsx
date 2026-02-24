import {ReactNode} from "react";
import type {RichTag} from "./useRichT";

export const brandClass =
  (className: string): RichTag =>
  (chunks: ReactNode) =>
    <span className={className}>{chunks}</span>;