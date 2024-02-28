import PropTypes from 'prop-types'
import {
    ProfileBg,
    ProfileWrapper,
    ProfileLeft,
    ProfileRight,
    ProfileH1,
    ProfileContent,
    Signature,
    ProfileImg,
    ProfileContentRight,
    ProfileContentLeft
} from './ProfileElements'

Profile.propTypes = {
    profileTitle: PropTypes.string.isRequired,
    profileContent: PropTypes.string.isRequired,
    signature: PropTypes.object.isRequired,
    profileImg: PropTypes.object.isRequired,
}


export default function Profile({
    profileTitle,
    profileContent,
    signature,
    profileImg
}) {
    return(
        <>
            <ProfileBg>
                <ProfileWrapper>
                    <ProfileLeft>
                        <ProfileImg src={profileImg} />
                    </ProfileLeft>
                    <ProfileRight>
                        <ProfileH1>&lt; {profileTitle} &gt;</ProfileH1>
                        <ProfileContent>
                            <ProfileContentLeft>{profileContent}</ProfileContentLeft>
                            <ProfileContentRight>{profileContent}</ProfileContentRight>
                        </ProfileContent>
                        <Signature src={signature}/>
                    </ProfileRight>
                </ProfileWrapper>
            </ProfileBg>
        </>
    )
}