const Footer = () => {
  return (
    <footer className="padded bottom-0">
    <div className="container-footer">
        <div className="col-xs-12 col-lg-8 col-lg-offset-2">
            <p>My only wish is for an opportunity to prove myself. I am confident that my experience, my passions, and my integrity are an excellent match for Stripe's culture. If you call me in for an interview, you won't be disappointed.</p>
            <p>Sincerely, <br />Gregor Richardson</p>
                <div className="sig"></div>
            <div className="action">
                <div><a href="mailto:gregor@gregorrichardson.com?subject=Stripe Solutions Architect&body=Hi Gregor,%0A %0A We'd love to bring you in for an interview!" className="button">Email Me</a></div>
                <div><a href="/Gregor_Richardson_Resume.pdf" target="_blank" className="button">Download Resume</a></div>
            </div>
            <div className="row">
                <div className="social-list col-xs-12 col-lg-8 col-lg-offset-2">
                    <p className="copyright"></p>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}
export default Footer ;