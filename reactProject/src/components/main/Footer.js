import {useState, useEffect, Fragment} from "react";

function Footer(){
    return(
        <Fragment>
            <div className="bgded overlay row4">
                <footer id="footer" className="hoc clear">

                </footer>
            </div>
            <div className="wrapper row5">
                <div id="copyright" className="hoc clear">
                    <p className="fl_left">Copyright &copy; 2023-03-23 - 강남 쌍용교육센터 - <a href="#">손다애</a></p>
                    <p className="fl_right">Project by <a href="https://www.os-templates.com/">Git Address</a></p>
                </div>
            </div>
        </Fragment>
    )
}

export default Footer;