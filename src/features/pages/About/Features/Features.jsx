import styles from "./Features.module.css";
import FeaturesItem from "../FeaturesItem/FeaturesItem";
import { FormattedMessage } from "react-intl";
import { SectionLayout } from "../../../../components/SectionLayout/SectionLayout";

export default function Features() {

  let features = [
    {
      id: 1,
      title: "Extensive Legal Expertise",
      description: "Access a comprehensive range of legal topics, from corporate law to intellectual property, supported by seasoned professionals with deep industry knowledge.",
    },
    {
      id: 2,
      title: "Strategic Legal Counsel",
      description: "Receive personalized legal advice tailored to your specific needs, backed by strategic insights to navigate complex legal challenges effectively.",
    },
    {
      id: 3,
      title: "Dedicated Client Support",
      description: "Benefit from dedicated client support throughout your legal journey, ensuring clear communication and timely updates at every stage.",
    },
    {
      id: 4,
      title: "Transparent Fee Structure",
      description: "Gain peace of mind with transparent fee structures, providing clarity on costs and billing for legal services rendered.",
    },
    {
      id: 5,
      title: "Compliance Assurance",
      description: "Ensure compliance with regulatory standards and legal requirements, guided by experts who stay updated on the latest laws and regulations.",
    },
    {
      id: 6,
      title: "Efficient Case Management",
      description: "Experience streamlined case management processes, leveraging technology and best practices to optimize efficiency and outcomes.",
    },
    {
      id: 7,
      title: "Proven Track Record",
      description: "Partner with a law firm with a proven track record of successful cases and client satisfaction, delivering results you can trust.",
    }
  ];
  return (
    <SectionLayout title={<FormattedMessage id="features" />}>
      <div className={`${styles.features} relative `}>
        <div className="custom_container">
          <h4 className="font-bold text--primary text-center mb-3 capitalize">
          </h4>
          <div className="relative  pt-5">
            <div className={styles.features__center}>
              <div className={styles.features__circle}></div>
              <div className={styles.features__line}></div>
              <div className={`${styles['features__circle-bottom']}`}></div>
            </div>
            <div className="flex flex-wrap justify-items-center">
              {!features.length ? (
                <span className="">
                  <FormattedMessage id="noFeatures" />
                </span>
              ) : (
                ""
              )}
              {features.map((feature) => (
                <div
                  key={`features-section-item-${feature.id}`}
                  className={`${styles.features__row} w-full `}
                >
                  <div className="flex flex-wrap mx-4">
                    <div className=" md:w-1/2 px-4 mb-4">
                      <FeaturesItem feature={feature} />
                    </div>
                  </div>

                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
