import React, { Fragment } from 'react'
import { useParams } from 'react-router';
import { PriceCard } from '../PriceCard/PriceCard'

export const PricesTab = ({ lawyer }) => {
    let { lawyerId } = useParams();
    let LawyerData = {
        name: "محمد ماجد ماجد التهامي",
        about: "محامي متخصص لقضايا البرمجة",
        photo: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
        services: [
            {
                title: "تمثيل نظامي",
                intro: "خدمة التمثيل النظامي للأفراد والشركات والمؤسسات، بشكل دائم أو مؤقت .",
                min_price: 500,
            },
            {
                title: "تمثيل نظامي",
                intro: "خدمة التمثيل النظامي للأفراد والشركات والمؤسسات، بشكل دائم أو مؤقت .",
                min_price: 500,
            },
            {
                title: "تمثيل نظامي",
                intro: "خدمة التمثيل النظامي للأفراد والشركات والمؤسسات، بشكل دائم أو مؤقت .",
                min_price: 500,
            }
        ],
    };
    return (
        <Fragment>
            {LawyerData.services.map((service, index) => {
                return (
                    <PriceCard key={`service__${index}`} service={service} />
                )
            })}
        </Fragment>
    )
}
