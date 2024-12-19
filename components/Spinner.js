export const Spinner = () => {
  return (
    <>
      <span
        role="status"
        className="inline-block h-5 w-5 animate-spin rounded-full border-4 border-solid border-gray-100 border-r-gray-100/30 border-b-gray-100/30 dark:border-gray-600 dark:border-r-gray-600/30 dark:border-b-gray-600/30"
      ></span>
      <span className="sr-only">Loading...</span>
    </>
  );
};
