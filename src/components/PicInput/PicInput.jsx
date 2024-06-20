import { MdEdit } from "react-icons/md";
import styles from "./PicInput.module.css";
import { Fragment } from "react";
import { Error } from "../Error/Error";
import personImg from '../../assets/images/person.jpg';
export default function PicInput({
  values,
  setFieldValue,
  name,
  oldFile,
  backError,
  error,
  contain,
  info,
  readOnly,
}) {
  return (
    <div className="mb-3 text-center w-full">
      <div className={`${styles["profile__pic-cont"]} mb-8 w-full`}>
        <div className={`text-center ${styles.pic__info} my-3 dark:text-white`}>{info}</div>
        <div className={`${styles.profile__pic} rounded-2xl`}>
          <img
            className={`w-full h-full ${contain ? "object-contain" : "object-cover"
              }`}
            src={
              values && values[name]
                ? URL.createObjectURL(values[name])
                : oldFile
                  ? oldFile
                  : personImg
            }
            alt=""
          />
        </div>
        {!readOnly ? (
          <Fragment>
            <input
              id={`edit-profile-img-inp-${name}`}
              type="file"
              className={styles["edit-img__inp"]}
              onChange={(e) => setFieldValue(name, e.target.files[0])}
            />
            <label
              className={`${styles.edit__btn} dark:text-black`}
              htmlFor={`edit-profile-img-inp-${name}`}
            >
              <MdEdit />
            </label>
          </Fragment>
        ) : (
          ""
        )}
      </div>
      {backError || error ? <Error>{backError || error}</Error> : ""}
    </div>
  );
}
