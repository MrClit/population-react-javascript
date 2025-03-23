import PageContent from "../components/PageContent.jsx";

export default function ErrorPage() {

  let title = "An error has occurred!";
  let message = "Something went wrong!";

  return (
    <>
    <PageContent title={title}>
      {message}
    </PageContent>
    </>
  )
}