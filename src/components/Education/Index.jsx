import React from "react";
import styled from "styled-components";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { education, workExperience } from "../../data/CConstants";
import EducationCard from "../Cards/EducationCard";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 0px 0px 60px 0px;
  @media (max-width: 960px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 40px 0px 0px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: justify;
  text-justify: inter-word;
  max-width: 800px;
  line-height: 1.8;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
    padding: 0 16px;
  }
`;

const TimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  @media (max-width: 660px) {
    align-items: end;
  }
`;

const EducationTimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 20px;
  padding: 24px;
  background: ${({ theme }) => theme.card_background}; // netral
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.3s ease;
`;

const WorkTimelineSection = styled.div`
  width: 100%;
  max-width: 1000px;
  margin-top: 20px;
  padding: 24px;
  background: ${({ theme }) => theme.primary + "10"}; // transparan dari primary
  border-left: 4px solid ${({ theme }) => theme.primary};
  border-radius: 12px;
  box-shadow: 0 4px 14px rgba(133, 76, 230, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
  transition: all 0.3s ease;
`;

const index = () => {
  return (
    <Container id="education">
      <Wrapper>
        <Title>Education & Course Bootcamp</Title>
        <Desc>
          My educational journey combines formal academic studies with hands-on
          learning through intensive bootcamps and online courses. This blend of
          theory and real-world practice has equipped me with strong
          foundational knowledge and practical experience in full-stack web
          development, empowering me to build modern, responsive, and scalable
          web applications.
        </Desc>
        <TimelineSection>
          <Timeline>
            {education.map((education) => (
              <TimelineItem>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <EducationCard education={education} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />

                  <TimelineConnector style={{ background: "#854CE6" }} />
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
      <Wrapper>
        <Title>Work Experience</Title>
        <Desc>
          My work experience has been a journey of continuous learning and
          professional growth, enabling me to develop a diverse set of skills
          and contribute meaningfully to every role I have undertaken. Below are
          the details of my career :
        </Desc>
        <TimelineSection>
          <Timeline>
            {workExperience.map((work) => (
              <TimelineItem>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <EducationCard education={work} />
                </TimelineContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" color="secondary" />
                  <TimelineConnector style={{ background: "#854CE6" }} />
                </TimelineSeparator>
              </TimelineItem>
            ))}
          </Timeline>
        </TimelineSection>
      </Wrapper>
    </Container>
  );
};

export default index;
