export const resetRegisterForm = (
  nameRef,
  emailRef,
  numberRef,
  addressRef,
  streetRef,
  cityRef,
  postalRef,
  pwRef,
  cpwRef
) => {
  nameRef.current.value = "";
  emailRef.current.value = "";
  numberRef.current.value = "";
  addressRef.current.value = "";
  streetRef.current.value = "";
  cityRef.current.value = "";
  postalRef.current.value = "";
  pwRef.current.value = "";
  cpwRef.current.value = "";
};
