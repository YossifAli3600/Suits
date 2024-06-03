import styles from "./FeaturesItem.module.css";

export default function FeaturesItem({ feature }) {
  return (
    <div
      className={`${styles.features_item} text-center  h-full flex flex-col content-center`}
    >
      <div className=" bg-white dark:bg-slate-400 dark:text-white">
        <h5 className=" font-bold m-2 capitalize">{feature.title}</h5>
        <p className="m-0 text-transform-normal">{feature.description}</p>
      </div>
      <div className="line"></div>
    </div>
  );
}
