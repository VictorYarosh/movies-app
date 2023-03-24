import { useForm } from 'react-uforms';

const useSearch = () => {
  const { submit } = useForm();

  const handleOnClick = () => {
    submit();
  };

  return {
    handleOnClick,
  };
};
export default useSearch;
