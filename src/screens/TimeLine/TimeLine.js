import React from 'react';
import {Grid, Typography} from '@mui/material';
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

export default function TimeLine() {
    return (
        <Grid px={3} sx={styles.container} flexDirection='column'  container >
            <Grid
                mt={"40px"}
                px={'40px'}
                py={'24px'}
                sx={{
                    backgroundColor: '#209DEF',
                    textAlign: 'center',
                    borderRadius: '40px',
                    zIndex: 99,
                    marginBottom:"-7px",
                }}
                flexDirection='column'
            >
                <Typography variant='h3' component='h3'>
                    ROADMAP
                </Typography>
                <Typography variant='h3' component='h3'>
                    V1
                </Typography>
            </Grid>
            <VerticalTimeline>
                <div style={{height: '100px'}}></div>

                <VerticalTimelineElement
                    position='left'
                    className='vertical-timeline-element--work'
                    contentStyle={{background: '#209DEF', color: '#fff'}}
                    contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                    date='0%'
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    // icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>Silly Sloth Club Launch</h3>
                    <p>10,000 Sloths make their ways into the jungle</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    position='right'
                    className='vertical-timeline-element--work'
                    contentStyle={{background: '#209DEF', color: '#fff'}}
                    contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                    date='10%'
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    // icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>Building the foundation</h3>
                    <p>Website V1</p>
                    <p>Social media presence</p>
                    <p>Discord community</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    position='left'
                    className='vertical-timeline-element--work'
                    contentStyle={{background: '#209DEF', color: '#fff'}}
                    contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                    date='20%'
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    // icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>Marketing, community building</h3>
                    <p>Fun competitions and giveaways</p>
                    <p>Community activities</p>
                    <p>Discord roles based on your Sloth type</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    position='right'
                    className='vertical-timeline-element--work'
                    contentStyle={{background: '#209DEF', color: '#fff'}}
                    contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                    date='50%'
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    // icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>Charity Event</h3>
                    <p>Supporting great causes to make Earth a better place. </p>
                    <p>It’s our responsibility to protect the planet for future generations.</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    position='left'
                    className='vertical-timeline-element--work'
                    contentStyle={{background: '#209DEF', color: '#fff'}}
                    contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                    date='80%'
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    // icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>Collabs, merch</h3>
                    <p>
                        Cardano is built on collaboration, we plan to make exciting community projects with other NFT
                        teams
                    </p>
                    <p>
                        If there is a considerable interest we will drop our own merch line (hoodies, t-shirts, beanies
                        and much more)
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    position='right'
                    className='vertical-timeline-element--work'
                    contentStyle={{background: '#209DEF', color: '#fff'}}
                    contentArrowStyle={{borderRight: '7px solid  rgb(33, 150, 243)'}}
                    date='100%'
                    iconStyle={{background: 'rgb(33, 150, 243)', color: '#fff'}}
                    // icon={<WorkIcon />}
                >
                    <h3 className='vertical-timeline-element-title'>Future plans</h3>
                    <p>If the project is a success, the possibilities are endless. </p>
                    <p>It all depends on you, the community. </p>
                </VerticalTimelineElement>
                <div style={{height: '100px'}}></div>
            </VerticalTimeline>
        </Grid>
    );
}

const styles = {
    container: {
        minHeight: {md: '100vh'},
        background: 'rgb(14,17,22)',
        background: 'linear-gradient(0deg, rgba(14,17,22,1) 0%, rgba(19,23,29,1) 100%)',
        alignItems: {
            xs:"flex-start",
            md:"center"
        }
    },
};
