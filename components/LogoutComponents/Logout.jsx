import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { ThreeCircles } from "react-loader-spinner";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/AuthContext";
import { logoutUser } from "../../fetchFunctions/logoutUser";
import { useGlobalContext } from "../../context/GlobalContext";
// import { signOut } from "firebase/auth";
// import { auth } from "../../config/firebase";
function Logout() {
  const { updateLoged, updateLogedUser, updateRole } = useAuthContext();
  const { resetOrder } = useGlobalContext();
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      // signOut(auth);
      updateLoged(false);
      updateLogedUser(null);
      updateRole(null);
      resetOrder();

      const res = await logoutUser();

      toast(res.data?.message, {
        progressStyle: { background: "#4CBB17" },
      });
      router.push("/");
    };

    fetchData();
  }, []);
  return (
    <div className="logout-component">
      <ThreeCircles
        height="150"
        width="150"
        color="#4fa94d"
        wrapperStyle={{}}
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#007FFF"
        innerCircleColor="#4CBB17"
        middleCircleColor="#f89a20"
      />
      <Text fontSize={"2xl"} color={"#4CBB17"} fontWeight={"bold"}>
        PC <span style={{ color: "#007FFF" }}>Expert</span>
      </Text>

      <Text fontSize={"2xl"} color={"#0c0c0c"}>
        Odjavljujem...
      </Text>
    </div>
  );
}

export default Logout;
