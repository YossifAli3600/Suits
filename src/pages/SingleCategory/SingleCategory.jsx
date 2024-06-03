import React from 'react'
import { useParams } from 'react-router'
import Loading from '../../components/Loading/Loading';
import { LawyerCard } from '../../components/LawyerCard/LawyerCard';
import { SectionLayout } from '../../components/SectionLayout/SectionLayout';
import { FormattedMessage } from 'react-intl';

export const SingleCategory = () => {
    const { categoryId } = useParams()
    let lawyers = [
        {
            id: 1,
            name: 'Ahmed Mohamed',
            category: "Family Law",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            shortDescription: "Experienced in family law matters, ensuring fair resolutions for all parties involved.",
            longDescription: "Ahmed Mohamed is a seasoned attorney specializing in family law. With over a decade of experience, Ahmed has successfully represented numerous clients in various family law matters, including divorce, child custody, alimony, and domestic violence cases. He is known for his compassionate approach and dedication to achieving fair and equitable resolutions for his clients."
        },
        {
            id: 2,
            name: 'John Doe',
            category: "Corporate Law",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            shortDescription: "Skilled in corporate law, providing legal counsel to businesses of all sizes.",
            longDescription: "John Doe is a highly skilled corporate attorney with a focus on providing comprehensive legal counsel to businesses of all sizes. With a strong background in corporate law, mergers and acquisitions, and contract negotiations, John has successfully guided numerous companies through complex legal matters. His strategic thinking and attention to detail make him a trusted advisor to his clients."
        },
        {
            id: 3,
            name: 'Emily Smith',
            category: "Immigration Law",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            shortDescription: "Dedicated to helping individuals navigate immigration law with expertise and compassion.",
            longDescription: "Emily Smith is a dedicated immigration attorney committed to helping individuals and families navigate the complexities of immigration law. With a deep understanding of immigration policies and procedures, Emily provides personalized legal representation to clients seeking visas, green cards, citizenship, and asylum. She is known for her compassionate approach and unwavering advocacy on behalf of her clients."
        },
        {
            id: 4,
            name: 'David Brown',
            category: "Real Estate Law",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            shortDescription: "Specializing in real estate law, assisting clients with property transactions and disputes.",
            longDescription: "David Brown is an experienced real estate attorney specializing in residential and commercial property matters. With extensive knowledge of real estate law, contracts, and negotiations, David assists clients in navigating complex property transactions, lease agreements, and property disputes. He is dedicated to protecting his clients' interests and achieving favorable outcomes in every case."
        },
        {
            id: 5,
            name: 'Sarah Johnson',
            category: "Personal Injury Law",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            shortDescription: "Advocating for victims of personal injury, seeking justice and fair compensation.",
            longDescription: "Sarah Johnson is a compassionate personal injury attorney dedicated to advocating for victims of accidents and negligence. With a strong background in personal injury law, Sarah provides personalized legal representation to clients injured in car accidents, slip and fall incidents, medical malpractice, and other types of accidents. She is committed to seeking justice and fair compensation for her clients' injuries and losses."
        },
        {
            id: 6,
            name: 'Mark Wilson',
            category: "Bankruptcy Law",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            shortDescription: "Helping individuals and businesses navigate bankruptcy proceedings with expertise and empathy.",
            longDescription: "Mark Wilson is a skilled bankruptcy attorney with a focus on helping individuals and businesses navigate financial challenges and debt relief through bankruptcy proceedings. With a deep understanding of bankruptcy law, Mark provides personalized guidance to clients considering Chapter 7, Chapter 13, or Chapter 11 bankruptcy. He is committed to helping his clients achieve a fresh start and regain financial stability."
        },
        {
            id: 7,
            name: 'Lisa Taylor',
            category: "Environmental Law",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            shortDescription: "Passionate about environmental protection, advocating for sustainable practices and compliance.",
            longDescription: "Lisa Taylor is a passionate environmental attorney committed to advocating for environmental protection and sustainability. With a background in environmental law and policy, Lisa provides legal counsel to individuals, businesses, and organizations on compliance with environmental regulations, land use planning, and natural resource management. She is dedicated to preserving the environment for future generations through responsible legal practices."
        },
        {
            id: 8,
            name: 'James Clark',
            category: "Intellectual Property Law",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            shortDescription: "Protecting intellectual property rights and assisting clients with patents, trademarks, and copyrights.",
            longDescription: "James Clark is a dedicated intellectual property attorney specializing in protecting the intellectual property rights of individuals and businesses. With expertise in patents, trademarks, copyrights, and trade secrets, James assists clients in securing and enforcing their intellectual property assets. He provides strategic legal counsel to help clients maximize the value of their intellectual property while safeguarding against infringement and unauthorized use."
        },
        {
            id: 9,
            name: 'Jennifer Martinez',
            category: "Employment Law",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            shortDescription: "Advocating for employees' rights in the workplace, addressing issues of discrimination, harassment, and wrongful termination.",
            longDescription: "Jennifer Martinez is a dedicated employment attorney focused on advocating for employees' rights in the workplace. With a deep understanding of employment law, Jennifer assists clients in addressing issues related to discrimination, harassment, wage and hour disputes, and wrongful termination. She provides personalized legal representation to help employees navigate complex employment matters and achieve favorable outcomes."
        },
        {
            id: 10,
            name: 'Kevin Harris',
            category: "Tax Law",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            shortDescription: "Providing strategic tax planning and representation to individuals and businesses.",
            longDescription: "Kevin Harris is a skilled tax attorney with a focus on providing strategic tax planning and representation to individuals and businesses. With expertise in federal and state tax laws, Kevin assists clients in minimizing tax liabilities, resolving tax disputes, and navigating complex tax regulations. He provides personalized guidance to help clients achieve their tax objectives while ensuring compliance with applicable tax laws."
        },
        {
            id: 11,
            name: 'Amanda Evans',
            category: "Healthcare Law",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            shortDescription: "Navigating the complex landscape of healthcare law, ensuring compliance and protecting clients' interests.",
            longDescription: "Amanda Evans is an experienced healthcare attorney dedicated to navigating the complex legal landscape of healthcare law. With a deep understanding of healthcare regulations, compliance requirements, and industry practices, Amanda provides legal counsel to healthcare providers, organizations, and businesses. She assists clients in addressing issues related to regulatory compliance, healthcare transactions, reimbursement, and fraud and abuse. Amanda is committed to protecting her clients' interests while promoting quality patient care."
        },
        {
            id: 12,
            name: 'Daniel White',
            category: "Civil Rights Law",
            image: "https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg",
            shortDescription: "Advocating for civil rights and liberties, fighting against discrimination and injustice.",
            longDescription: "Daniel White is a passionate civil rights attorney dedicated to advocating for justice, equality, and the protection of civil liberties. With a strong commitment to social justice, Daniel represents individuals and groups in cases involving discrimination, police misconduct, voting rights, and constitutional violations. He is known for his tireless advocacy and unwavering dedication to fighting for the rights of marginalized communities and individuals facing injustice."
        }
    ];

    let isLoading = false;
    let content;
    if (isLoading) {
        content = <Loading />;
    } else if (!lawyers || !lawyers.length) {
        content = <h2 className="fw-bolder text-center"><FormattedMessage id='noLawyers' /></h2>;
    } else {
        content = (
            <div className='grid my-5 grid-cols-1 md:grid-cols-3 gap-8'>
                {lawyers.map((lawyer) => {
                    return (
                        <LawyerCard key={lawyer.id} lawyer={lawyer} />
                    );
                })}
            </div>
        );
    }
    return (
        <SectionLayout title={<span><FormattedMessage id='lawyersNumber' /> : <span>{lawyers ? lawyers?.length : 0}</span></span>}>
            {content}
        </SectionLayout>
    )
}
