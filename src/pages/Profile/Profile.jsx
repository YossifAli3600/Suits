import React from 'react'
import VerticalNavAndTabs from '../../components/VerticalNavAndTabs/VerticalNavAndTabs'

export const Profile = () => {
    return (
        <div className='flex items-center justify-center'>
            <VerticalNavAndTabs
                defaultValue="subjects"
                id="course-details-tabs"
                route={`/courses/view/`}
                withPermissions
                tabs={[
                    { label: "المحاضرات", target: "lessons", permissions: ["lessons_show"] },
                    { label: "المحاضرات", target: "lessons", permissions: ["lessons_show"] },
                    { label: "المحاضرات", target: "lessons", permissions: ["lessons_show"] },
                    { label: "المحاضرات", target: "lessons", permissions: ["lessons_show"] },
                    { label: "المحاضرات", target: "lessons", permissions: ["lessons_show"] },
                ]}
            />
            
        </div>
    )
}
