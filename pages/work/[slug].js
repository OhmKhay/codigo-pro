import React from 'react'
import Layout from '../../src/App/Layout';
import { workDetailData } from '../../src/constants/workDetailData';
import WorkDetailSection from '../../src/component/WrokDetailSection'
const WorkDetailPage = ({ work }) => {
    const data = work[0];
    return (
        <Layout name={data?.name}>
            {/* Work Detail */}
             <WorkDetailSection data={work&&work[0]} />
        </Layout>
    )
}


WorkDetailPage.getInitialProps = async ({ query }) => {
    const { slug } = query
    const MyWork = workDetailData?.filter((data) => {
        return data.slug === slug; 
    });
    return { work: MyWork }
  }

export default WorkDetailPage
