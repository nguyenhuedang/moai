import React from "react";

import s from "./text.module.css";

interface Props {
	children: React.ReactNode;
}

export const text = {
	muted: s.muted as string,
	strong: s.strong as string,
	p: s.p as string,
	break: s.break as string,
	big: s.big as string,
	// ===
	highlightStrong: s.highlightStrong as string,
	highlightWeak: s.highlightWeak as string,
	successStrong: s.successStrong as string,
	successWeak: s.successWeak as string,
	failureStrong: s.failureStrong as string,
	failureWeak: s.failureWeak as string,
};

export const Paragraph: React.FC<Props> = ({ children }) => (
	<p className={s.p}>{children}</p>
);

export const Strong: React.FC<Props> = ({ children }) => (
	<strong className={s.strong}>{children}</strong>
);

export const MutedDiv: React.FC<Props> = ({ children }) => (
	<div className={s.muted}>{children}</div>
);

export const MutedSpan: React.FC<Props> = ({ children }) => (
	<span className={s.muted}>{children}</span>
);
