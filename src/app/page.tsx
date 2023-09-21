'use client';
import styles from './page.module.css';
import Btn from '@/components/UI/Btn';
import Tab from '@/components/UI/Tab';
import RadioList from '@/components/UI/RadioList';
import Login from '@/components/UI/Login';
import MultiForm from '@/components/UI/MultiForm';

const radioTech = {
  name: 'tech',
  items: [
    { value: 'html', label: 'HTML' },
    { value: 'css', label: 'CSS' },
    { value: 'js', label: 'JavaScript' },
  ],
  require: true,
};

export default function Page() {
  const handleClick = () => {
    console.log('클릭');
  };
  return (
    <>
      <h1>제목</h1>
      <h2>버튼</h2>
      <Btn></Btn>
      <Btn>Button</Btn>
      <Btn type="submit">submit</Btn>
      <Btn type="reset">reset</Btn>
      <Btn onClick={handleClick} className={styles.btn}>
        커스텀
      </Btn>
      <Btn disabled>button disabled</Btn>
      <Btn type="submit" disabled>
        submit disabled
      </Btn>
      <Btn type="reset" disabled>
        reset disabled
      </Btn>

      <h2>링크</h2>
      <Btn href="/depth" />
      <Btn
        href={{
          pathname: '/about',
          query: { name: 'test' },
        }}
      />

      <Btn href="#" target="_blank">
        안녕하세요
      </Btn>
      <Btn href="#" target="_blank" className={styles.btn}>
        안녕하세요
      </Btn>

      <Tab />
      <RadioList list={radioTech} />

      <Login />

      <MultiForm />
    </>
  );
}
