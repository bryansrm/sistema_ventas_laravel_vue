
@extends('layout')
@section('content')
<h1 v-if="IdMenu==0">Saludos desde menu 0</h1>
<categoria v-if="IdMenu==1"></categoria>
<h1 v-if="IdMenu==2"> Saludos desde menu 2</h1>
<h1 v-if="IdMenu==12"> Saludos desde menu 12</h1>
@endsection