export const resetQueryForm = (
  nameRef,
  emailRef,
  numberRef,
  shortDescRef,
  detailDescRef
) => {
  nameRef.current.value = "";
  emailRef.current.value = "";
  numberRef.current.value = "";
  shortDescRef.current.value = "";
  detailDescRef.current.value = "";
};
