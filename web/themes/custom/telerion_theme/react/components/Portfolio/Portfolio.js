import React, {useEffect, useState} from 'react';
import {DateTime} from 'luxon';
import {useMediaQuery} from 'react-responsive'

import Tabs from '../Tabs/Tabs';
import Project from "../Project/Project";
import {projectsRequest} from "./request";

import styles from './Portfolio.module.scss';

const portfolio = (props) => {
  const [activeTab, setActiveTab] = useState('graphic_design');
  const [projectsData, setProjectsData] = useState({loaded: false, projects: []});
  const tabs = [
    {label: 'UI Design', value: 'ui_design'},
    {label: 'UX Design', value: 'ux_design'},
    {label: 'Graphic Design', value: 'graphic_design'},
    {label: 'Branding', value: 'branding'},
    {label: 'Icon', value: 'icon'},
  ];
  const isLargeScreen = useMediaQuery({ query: '(min-width: 992px)' });
  const isMediumScreen = useMediaQuery({ query: '(min-width: 768px)' });
  const projectsLimit = isMediumScreen ? isLargeScreen ? 9 : 6 : 4;

  useEffect(() => {
    projectsRequest(setProjectsData, projectsLimit);
  }, []);

  const projectRenderer = projectData => {
    const createdTime = DateTime.fromISO(projectData.created);

    return (
      <Project
        title={projectData.title}
        published={createdTime.toFormat('d LLLL yyyy')}
        url={'/node/' + projectData.drupal_internal__nid}
        image={{url: projectData.field_media_image.field_media_image.uri.url, alt:projectData.field_media_image.field_media_image.resourceIdObjMeta.alt}}
      />
    );
  }

  const renderedProjects = projectsData.loaded ?
    projectsData.projects.length > 0 ?
      <div className={'projects'}>
        {projectsData.projects.map(project => projectRenderer(project))}
      </div> :
      <span>No projects found.</span> :
    <span>Loading...</span>;

  return (
    <div className={'portfolio-section ' + styles.Portfolio}>
      <div className='title'>Selected Portfolio</div>
      <div className='subtitle'>Freelance UI/UX Designer, also passionate in making beautfiul illustrations and icons</div>
      <div className='tabs-wrapper'>
        <Tabs items={tabs} activeTab={activeTab} setActive={setActiveTab}/>
        <div className="view-all-btn btn primary big white">
          <a href="/portfolio">View All</a>
        </div>
      </div>
      {renderedProjects}
    </div>
  );
}

export default portfolio;
