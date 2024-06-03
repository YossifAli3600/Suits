import React, { Fragment } from 'react'
// import { useCategoriesData } from '../../queries/queries';
import { FormattedMessage } from 'react-intl';
import { CategoryCard } from '../../../../components/CategoryCard/CategoryCard';
import Loading from '../../../../components/Loading/Loading';
import { SectionLayout } from '../../../../components/SectionLayout/SectionLayout';
import { Link } from 'react-router-dom';

export default function HomeCategories() {

    // const { data: categories, isLoading } = useCategoriesData();
    let categories = [
        {
            id: 1,
            name: 'Criminal Defense Lawyers',
            description: 'Lawyers who specialize in defending individuals and companies charged with criminal activity.',
            imageUrl: 'https://imgs.search.brave.com/JWNWvHTxHE5ExJVqyln57W4erLNlL9K4shi1SIR1I5s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjE1NTkw/NTEwNDktZjllMTQ3/YzdhOTBiP3E9ODAm/dz0xMDAwJmF1dG89/Zm9ybWF0JmZpdD1j/cm9wJml4bGliPXJi/LTQuMC4zJml4aWQ9/TTN3eE1qQTNmREI4/TUh4elpXRnlZMmg4/TVh4OGJHRjNlV1Z5/ZkdWdWZEQjhmREI4/Zkh3dw.jpeg'
        },
        {
            id: 2,
            name: 'Family Law Attorneys',
            description: 'Legal professionals who handle matters such as divorce, child custody, and adoption.',
            imageUrl: 'https://imgs.search.brave.com/JWNWvHTxHE5ExJVqyln57W4erLNlL9K4shi1SIR1I5s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjE1NTkw/NTEwNDktZjllMTQ3/YzdhOTBiP3E9ODAm/dz0xMDAwJmF1dG89/Zm9ybWF0JmZpdD1j/cm9wJml4bGliPXJi/LTQuMC4zJml4aWQ9/TTN3eE1qQTNmREI4/TUh4elpXRnlZMmg4/TVh4OGJHRjNlV1Z5/ZkdWdWZEQjhmREI4/Zkh3dw.jpeg'
        },
        {
            id: 3,
            name: 'Personal Injury Lawyers',
            description: 'Attorneys who represent clients who have been injured in accidents or due to the negligence of others.',
            imageUrl: 'https://imgs.search.brave.com/JWNWvHTxHE5ExJVqyln57W4erLNlL9K4shi1SIR1I5s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjE1NTkw/NTEwNDktZjllMTQ3/YzdhOTBiP3E9ODAm/dz0xMDAwJmF1dG89/Zm9ybWF0JmZpdD1j/cm9wJml4bGliPXJi/LTQuMC4zJml4aWQ9/TTN3eE1qQTNmREI4/TUh4elpXRnlZMmg4/TVh4OGJHRjNlV1Z5/ZkdWdWZEQjhmREI4/Zkh3dw.jpeg'
        },
        {
            id: 4,
            name: 'Immigration Lawyers',
            description: 'Legal experts who assist individuals with immigration matters such as visas, green cards, and citizenship applications.',
            imageUrl: 'https://imgs.search.brave.com/JWNWvHTxHE5ExJVqyln57W4erLNlL9K4shi1SIR1I5s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjE1NTkw/NTEwNDktZjllMTQ3/YzdhOTBiP3E9ODAm/dz0xMDAwJmF1dG89/Zm9ybWF0JmZpdD1j/cm9wJml4bGliPXJi/LTQuMC4zJml4aWQ9/TTN3eE1qQTNmREI4/TUh4elpXRnlZMmg4/TVh4OGJHRjNlV1Z5/ZkdWdWZEQjhmREI4/Zkh3dw.jpeg'
        },
        {
            id: 5,
            name: 'Real Estate Attorneys',
            description: 'Lawyers specializing in legal matters related to real estate transactions, such as buying, selling, or leasing property.',
            imageUrl: 'https://imgs.search.brave.com/JWNWvHTxHE5ExJVqyln57W4erLNlL9K4shi1SIR1I5s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjE1NTkw/NTEwNDktZjllMTQ3/YzdhOTBiP3E9ODAm/dz0xMDAwJmF1dG89/Zm9ybWF0JmZpdD1j/cm9wJml4bGliPXJi/LTQuMC4zJml4aWQ9/TTN3eE1qQTNmREI4/TUh4elpXRnlZMmg4/TVh4OGJHRjNlV1Z5/ZkdWdWZEQjhmREI4/Zkh3dw.jpeg'
        },
        {
            id: 6,
            name: 'Business Lawyers',
            description: 'Legal professionals who advise businesses on various legal issues such as contracts, intellectual property, and corporate governance.',
            imageUrl: 'https://imgs.search.brave.com/JWNWvHTxHE5ExJVqyln57W4erLNlL9K4shi1SIR1I5s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wbHVz/LnVuc3BsYXNoLmNv/bS9wcmVtaXVtX3Bo/b3RvLTE2NjE1NTkw/NTEwNDktZjllMTQ3/YzdhOTBiP3E9ODAm/dz0xMDAwJmF1dG89/Zm9ybWF0JmZpdD1j/cm9wJml4bGliPXJi/LTQuMC4zJml4aWQ9/TTN3eE1qQTNmREI4/TUh4elpXRnlZMmg4/TVh4OGJHRjNlV1Z5/ZkdWdWZEQjhmREI4/Zkh3dw.jpeg'
        }
    ];

    let isLoading = false;
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
                        <CategoryCard key={category.id} category={category} />
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