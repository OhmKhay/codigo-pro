import React, { Component } from 'react';
import Footer from '../../component/Footer';
import WorkDetailSection from '../../component/WrokDetailSection';
import { dataSet } from '../../constants';
import './work-detail-page.scss';
class WorkDetailPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            data: null
        };
    }
     
    componentDidMount(){
        const { match } = this.props;
        this.loadDetailData(match.params);
    }
    loadDetailData(params){
        this.setState({isLoading: true})
        const detailData = dataSet.filter((item)=> item.url === params.slug)
        setTimeout(() => {
            this.setState({isLoading: false, data: detailData});    
        }, 700);        
    }
    render() { 
        const { isLoading, data } = this.state;
        return (
            <section>
                {
                isLoading ? 
                    <div className="loading">loading .....</div>
                    :
                    <React.Fragment>
                        <WorkDetailSection data={data && data[0]}/>
                        <Footer />
                    </React.Fragment>
                }                
            </section>
        );
    }
}
 
export default WorkDetailPage;