import React, { Fragment } from 'react'
import { FormattedMessage } from 'react-intl';
import { CategoryCard } from '../../../../components/CategoryCard/CategoryCard';
import Loading from '../../../../components/Loading/Loading';
import { SectionLayout } from '../../../../components/SectionLayout/SectionLayout';
import { Link } from 'react-router-dom';
import { useCategoriesData } from '../../../../queries/queries';

export default function HomeCategories() {

    const { data: categories, isLoading } = useCategoriesData();

    let content;
    if (isLoading) {
        content = <Loading />;
    } else if (!categories || !categories.length) {
        content = <h2 className="fw-bolder text-center"><FormattedMessage id='noCategories' /></h2>;
    } else {
        content = (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8 my-6'>
                {categories.slice(0, 3).map((category) => {
                    return (
                        <CategoryCard key={category.department_id} category={category} />
                    );
                })}

            </div>
        );
    }

    return (
        <SectionLayout title={<div className='flex justify-between'><span><FormattedMessage id='categories' /></span><Link to={"/categories"} className='text-lg'>
            <span className='bg-[#DDB762] text-white rounded-lg p-2 hover:bg-transparent hover:text-black dark:hover:text-white transition-all duration-700 '><FormattedMessage id="viewAll" /></span>
        </Link></div>}>
            {content}
        </SectionLayout>
    );
}