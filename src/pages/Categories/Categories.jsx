import React, { Fragment } from 'react'
import { FormattedMessage } from 'react-intl';
import { CategoryCard } from '../../components/CategoryCard/CategoryCard';
import Loading from '../../components/Loading/Loading';
import { SectionLayout } from '../../components/SectionLayout/SectionLayout';
import { useCategoriesData } from '../../queries/queries';

export default function Categories() {

    const { data: categories, isLoading } = useCategoriesData();

    let content;
    if (isLoading) {
        content = <Loading />;
    } else if (!categories || !categories.length) {
        content = <h2 className="fw-bolder text-center"><FormattedMessage id='noCategories' /></h2>;
    } else {
        content = (
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {categories.map((category) => {
                    return (
                        <CategoryCard key={category.id} category={category} />
                    );
                })}
            </div>
        );
    }

    return (
        <SectionLayout title={<span><FormattedMessage id='categoriesNumber' /> : <span>{categories ? categories?.length : 0}</span></span>}>
            {content}
        </SectionLayout>
    );
}