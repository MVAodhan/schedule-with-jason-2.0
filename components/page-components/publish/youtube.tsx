import { useState } from 'react';

const youtube = ({ episode }: { episode: any }) => {
  const renderTab = () => {};
  const [activeTab, setActiveTab] = useState<string>('publishing');
  return (
    <div className="flex flex-col items-center">
      <div className="tabs tabs-boxed w-1/3 justify-center bg-[#FFFFFF]">
        <a
          className={`tab ${activeTab === 'generation' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('generation')}
        >
          Generation text
        </a>
        <a
          className={`tab ${activeTab === 'publishing' ? 'tab-active' : ''}`}
          onClick={() => setActiveTab('publishing')}
        >
          Publishing text
        </a>
      </div>
    </div>
  );
};

export default youtube;
