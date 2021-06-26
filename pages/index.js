import React, { useEffect } from 'react'
import { useRouter } from 'next/router';
import Layout from '../src/App/Layout';
import Work from '../src/container/Work';
const IndexPage = () => {
    const router = useRouter();
    useEffect(() => {
        router.push({
            pathname: '/work',
            query: { tags: `all` }
          }, 
          undefined, { shallow: true }
          )
    }, [])
    return (
      <div>
          
      </div>
    )
}

export default IndexPage
