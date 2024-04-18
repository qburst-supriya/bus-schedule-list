import { Helmet } from 'react-helmet-async';

type PropsType = {
  titleText: string;
};

const DocumentHeader = (props: PropsType) => {
  return (
    <>
      <Helmet>
        <title>{props.titleText} </title>
      </Helmet>
    </>
  );
};

export default DocumentHeader;
