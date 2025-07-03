import { Outlet } from "react-router";
import AnalyticsTracker from "../analytics/AnalyticsTracker";

const RootLayout = () => {
  return (
    <>
      <AnalyticsTracker />
      <Outlet />
    </>
  )
}

export default RootLayout
