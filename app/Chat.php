<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Chat extends Model
{
    public function participant() {
        return $this->hasMany(ChatParticipant::class);
    }

    public function messages() {
        return $this->hasManyThrough(ChatMessage::class, ChatParticipant::class);
    }
}
