import styled from 'styled-components'

const SidebarWrapper = styled.div`
    .sidebar {
        z-index: 1000;
        width: 280px;
        height: 100vh;
        transition: all 0.33s;

        @media only screen and (max-width: 767px) {
            display: none;
        }

        .ant-tooltip-inner {
            background-color: white !important;
        }

        &.ant-layout-sider-collapsed {
            .sidebarLogo {
                max-width: 50px;
            }

            @media only screen and (max-width: 767px) {
                display: block;
            }
        }

        .sidebarLogo {
            transition: all 0.33s;
            display: flex;
            width: 100%;
            margin: auto;
            padding: 2.3rem 0 3rem 0;
            max-width: 80px;
        }

        a {
            display: flex;
            justify-content: start;
            align-items: center;
            height: 100%;
            color: black;

            h5 {
                color: ${(props) => props.theme.grey};
                font-weight: 400;
                transition: all 0.3s ease;
            }

            svg {
                margin-right: 2rem;
                width: 2.5rem;
                height: 2.5rem;
            }
        }

        .sidebar-menu {
            a {
                margin: 1rem 0;
                padding: 1rem 0;
                padding-left: 10%;
                position: relative;
                width: 100%;
                transition: all 0.3s ease-in-out;
            }

            &--active {
                background-color: ${(props) => props.theme.primary};

                h5 {
                    color: ${(props) => props.theme.primary};
                    font-weight: 700;
                }

                svg {
                    fill: ${(props) => props.theme.primary};
                }
            }
        }

        &.ant-layout-sider-collapsed {
            .sidebar-menu {
                a {
                    h5 {
                        display: none;
                    }
                }
            }
        }
    }
`

export default SidebarWrapper
