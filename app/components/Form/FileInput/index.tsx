import React, {SyntheticEvent, useState} from "react";
import {ChangeHandler} from "react-hook-form";
import styles from "./styles.module.scss"
import AttachFileIcon from "../../../icons/AttachFileIcon";
import classNames from "classnames";

type Props = {
  className?: string,
  register?: {
    onChange: ChangeHandler,
    onBlur: ChangeHandler,
    ref: React.Ref<any>,
    name: string
  },
  placeholder?: string | React.ReactNode,
  name?: string,
  accept?: string,
  multiple?: boolean,
  icon?: React.ReactElement,
  showIcon?: boolean,
  hideAttachedFileNames?: boolean,
  afterImageUpload?: (files: File[]) => void,
  handleChange?: (files: File[]) => void
}

const FileInput: React.FC<Props> =
  ({
     className,
     register,
     placeholder,
     name,
     accept,
     multiple,
     icon,
     showIcon,
     hideAttachedFileNames,
     afterImageUpload,
     handleChange
   }) => {
    const [attachedFiles, setAttachedFiles] = useState<{ name: string }[]>([])

    const onChange = (event: any) => {
      setAttachedFiles([...event.target.files])
      if (handleChange) {
        handleChange([...event.target.files])
      } else {
        register?.onChange(event)
        if (afterImageUpload) {
          afterImageUpload([...event.target.files])
        }
      }
    }

    return (
      <>
        <input
          ref={register?.ref}
          onChange={onChange}
          onBlur={register?.onBlur}
          className={classNames(styles.input)}
          name={register?.name || name}
          id={register?.name || name}
          type="file"
          accept={accept || "application/pdf, .png, .jpg"}
          multiple={multiple}
        />
        <label className={classNames(styles.label, className)} htmlFor={register?.name || name}>
          {placeholder}
          {icon ? icon : <AttachFileIcon/>}
        </label>
        {(!hideAttachedFileNames) && attachedFiles.map((file, index) =>
          <small key={index}>{file.name}</small>
        )}
      </>
    )
  }

export default FileInput
