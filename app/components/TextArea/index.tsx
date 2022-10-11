import React, { InputHTMLAttributes } from "react";
import { ChangeHandler } from "react-hook-form";
import classNames from "classnames";
import styles from "./styles.module.scss";

type Props = InputHTMLAttributes<HTMLTextAreaElement> & {
	className?: string;
	type?: string;
	name?: string;
	register?: {
		onChange: ChangeHandler;
		onBlur: ChangeHandler;
		ref: React.Ref<any>;
		name: string;
	};
	icon?: React.ReactElement;
};

const Input: React.FC<Props> = ({
	className,
	type,
	register,
	name,
	icon,
	...props
}) => {
	return (
		<div className={styles.inputGroup}>
			{icon ? icon : null}

			<textarea
				name={name || register?.name}
				className={classNames(styles.input, className, {
					[styles.inputIcon]: icon,
				})}
				ref={register?.ref}
				onChange={register?.onChange}
				onBlur={register?.onBlur}
				{...props}
			/>
		</div>
	);
};

export default Input;
