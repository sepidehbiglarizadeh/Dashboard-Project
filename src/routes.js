import ChatsPage from "./pages/ChatsPage";
import HomePage from "./pages/HomePage";
import InvitationPage from "./pages/InvitationPage";
import InvoicePage from "./pages/InvoicPage";
import MembershipPage from "./pages/MembershipPage";
import ProfilePage from "./pages/ProfilePage";

const routes = [
  { path: "/", element: <HomePage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/chats", element: <ChatsPage /> },
  { path: "/invitation", element: <InvitationPage /> },
  { path: "/invoice", element: <InvoicePage /> },
  { path: "/membership", element: <MembershipPage /> },
];

export default routes;
