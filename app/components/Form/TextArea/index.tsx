import React, { TextareaHTMLAttributes } from "react";
import styles from "./styles.module.scss";
import { ChangeHandler } from "react-hook-form";
import classNames from "classnames";

type Props = TextareaHTMLAttributes<HTMLTextAreaElement> & {
	className?: string;
	name?: string;
	register?: {
		onChange: ChangeHandler;
		onBlur: ChangeHandler;
		ref: React.Ref<any>;
		name: string;
	};
};

const TextArea: React.FC<Props> = ({ className, name, register, ...props }) => {
	return (
		<div className={styles.inputGroup}>
			<textarea
				placeholder='Раскажите о себе и своем опыте'
				rows={4}
				name={name || register?.name}
				ref={register?.ref}
				className={classNames(styles.textArea, className)}
				onChange={register?.onChange}
				onBlur={register?.onBlur}
				{...props}
			/>
		</div>
	);
};

export default TextArea;
