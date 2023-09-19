'use client';
import { useRef, useState } from 'react';
import styles from './Tab.module.css';

const tabList = [
  { title: 'Tab1', content: '탭11111' },
  { title: 'Tab2', content: '탭22222' },
  { title: 'Tab3', content: '탭33333' },
];

export default function Tab({ props }: { props?: any }) {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement>>([]);

  const handleKeydown = (e: any) => {
    const targetTabIndex = Number(e.target.id.slice(3));
    const tabs = tabRefs.current.filter(Boolean);

    if (
      targetTabIndex === 0 &&
      (e.key === 'ArrowLeft' ||
        e.key === 'ArrowUp' ||
        (e.shiftKey && e.key === 'Tab'))
    ) {
      // 첫번째 탭: 왼쪽, 위, Shift + Tab -> 마지막 탭으로 이동
      e.preventDefault();
      tabs[tabs.length - 1].focus();
      setSelectedTabIndex(tabs.length - 1);
    } else if (
      targetTabIndex === tabList.length - 1 &&
      (e.key === 'ArrowRight' ||
        e.key === 'ArrowDown' ||
        (!e.shiftKey && e.key === 'Tab'))
    ) {
      // 마지막 탭: 오른쪽, 아래, Tab -> 처음 탭으로
      e.preventDefault();
      tabs[0].focus();
      setSelectedTabIndex(0);
    } else {
      if (
        e.key === 'ArrowLeft' ||
        e.key === 'ArrowUp' ||
        (e.shiftKey && e.key === 'Tab')
      ) {
        // 왼쪽, 위 -> 이전 탭으로
        e.preventDefault();
        tabs[targetTabIndex - 1].focus();
        setSelectedTabIndex(targetTabIndex - 1);
      } else if (
        e.key === 'ArrowRight' ||
        e.key === 'ArrowDown' ||
        (!e.shiftKey && e.key === 'Tab')
      ) {
        // 오른쪽, 아래 -> 다음 탭으로
        e.preventDefault();
        tabs[targetTabIndex + 1].focus();
        setSelectedTabIndex(targetTabIndex + 1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        tabs[0].focus();
        setSelectedTabIndex(0);
      } else if (e.key === 'End') {
        e.preventDefault();
        tabs[tabs.length - 1].focus();
        setSelectedTabIndex(tabs.length - 1);
      }
    }
  };

  const handleTab = (e: any) => {
    const clickedTabIndex = Number(e.target.id.slice(3));
    setSelectedTabIndex(clickedTabIndex);
  };
  return (
    <>
      {/* Tab Index */}
      <ul role="tablist">
        {tabList.map((tab, index) => (
          <li key={index}>
            <button
              role="tab"
              id={`tab${index}`}
              aria-controls={`section${index}`}
              aria-selected={selectedTabIndex ? true : false}
              onClick={handleTab}
              onKeyDown={handleKeydown}
              ref={(el) => (el ? (tabRefs.current[index] = el) : null)}>
              {tab.title}
            </button>
          </li>
        ))}
      </ul>

      {/* Tab Contents */}
      <div className={styles.tabContent}>
        {tabList.map((tab, index) => (
          <section
            key={index}
            role="tabpanel"
            id={`section${index}`}
            aria-labelledby={`tab${index}`}
            className={index === selectedTabIndex ? styles.show : styles.hide}>
            {tab.content}
          </section>
        ))}
      </div>
    </>
  );
}
