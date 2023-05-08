import React from 'react';
import { NavigationDots, SocialMedia } from '../components';

const AppWrap = (Component, idName, classNames) => function HOC() {
  return (
    <div id={idName} className={`w-full min-h-screen flex flex-row ${classNames}`}>
      <SocialMedia />
      <div className="flex flex-1 w-full flex-col pt-32 pb-8 px-8 justify-center items-center">
        <Component />

        <div className="w-full pt-8 flex flex-col justify-end items-end cursor-default">
          <p className="text-sm text-left text-default-900 uppercase">@2023 SIMONA</p>
          <p className="text-sm text-left text-default-900 uppercase">All rights reserved</p>
        </div>
      </div>
      <NavigationDots active={idName} />
    </div>
  );
};

export default AppWrap;
