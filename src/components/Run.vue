<template>
    <h1>{{ surveyData.name }}</h1>
    <SurveyComponent :model="survey" />
</template>
<script>

import { Model, StylesManager } from 'survey-core'
import { getSurvey, postResult } from '../models/survey';
import 'survey-core/defaultV2.css';

StylesManager.applyTheme("defaultV2");

export default {
    data: () => ({
        surveyData: {},
        survey: null
    }),
    created() {
        this.initialize();
    },
    methods: {
        async initialize() {
            const { id: surveyId } = this.$route.params
            const data = await getSurvey(`${surveyId}`);
            this.surveyData = data;
            this.survey = new Model(data.json);
            this.survey.onComplete.add(async (sender) => {
                const json = {
                    postid:surveyId,
                    surveyResult: sender.data,
                    surveyResultText: JSON.stringify(sender.data),
                    timestamp: new Date()
                }
                await postResult(surveyId, json)
            })
        }
    },

}
</script>