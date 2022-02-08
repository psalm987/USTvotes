import ThemeState from './theme/ThemeState.js';

const AllStates = ({ children, ...props }) => {
  return <ThemeState>{children}</ThemeState>;
};

export default AllStates;
