import { FormattedMessage } from 'react-intl';
import styles from './ContactInfo.module.css'

import { Col, Row } from "react-bootstrap";

export default function ContactInfo({contactData}) {
  return (
    <div className={styles.contact__info}>
      <h4 className="fw-bold text--primary text-center mb-5 capitalize">
        <FormattedMessage id='youCanContactUs'/>
      </h4>
      <Row>
        <Col md={4} className="d-flex flex-column text-center">
          <span className="fw-bold mb-2"><FormattedMessage id='address'/></span>
          <p>{contactData ? contactData.address : ''}</p>
        </Col>
        <Col md={4} className="d-flex flex-column text-center">
          <span className="fw-bold mb-2"><FormattedMessage id='phone'/></span>
          <p>{contactData ? contactData.phone : ''}</p>
        </Col>
        <Col md={4} className="d-flex flex-column text-center">
          <span className="fw-bold mb-2"><FormattedMessage id='email'/></span>
          <p className='text-transform-normal'>{contactData ? contactData.email : ''}</p>
        </Col>
      </Row>
    </div>
  );
}
