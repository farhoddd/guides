import React, { ButtonHTMLAttributes } from "react";
import classNames from "classnames";
import styles from "./styles.module.scss";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	children: React.ReactNode;
	className?: string;
	handle?: React.MouseEventHandler<HTMLButtonElement>;
};

const Button: React.FC<Props> = ({ children, className, handle, ...props }) => {
	return (
		<button
			onClick={handle}
			className={classNames(styles.btn, className)}
			{...props}
		>
			{children}
		</button>
	);
};

export default Button;
