export const resetOrderForm = (
  nameRef,
  emailRef,
  numberRef,
  addressRef,
  streetRef,
  cityRef,
  postalRef,
  shortDescRef,
  detailDesRef
) => {
  nameRef.current.value = "";
  emailRef.current.value = "";
  numberRef.current.value = "";
  addressRef.current.value = "";
  streetRef.current.value = "";
  cityRef.current.value = "";
  postalRef.current.value = "";
  shortDescRef.current.value = "";
  detailDesRef.current.value = "";
};
